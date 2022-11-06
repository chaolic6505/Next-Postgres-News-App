import Link from 'next/link';
import TimeAgo from 'react-timeago';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
    ChatAltIcon,
    ArrowUpIcon,
    ArrowDownIcon,
} from '@heroicons/react/outline';

import Avatar from './Avatar';
import { ADD_VOTE } from '../graphql/mutations';
import { GET_ALL_VOTES_BY_POST_ID } from '../graphql/queries';

type Props = {
    post: Post;
};

function Post({ post }: Props) {
    const [vote, setVote] = useState<boolean>();
    const { data: session } = useSession();

    const { data, loading, error } = useQuery(GET_ALL_VOTES_BY_POST_ID, {
        variables: {
            post_id: post?.id,
        },
    });

    const [addVote] = useMutation(ADD_VOTE, {
        refetchQueries: [GET_ALL_VOTES_BY_POST_ID, 'getVotesByPostId'],
    });

    useEffect(() => {
        const votes: Vote[] = data?.getVotesByPostId;

        //Latest votes coming fro SQL query
        //We set vote to true, false or undefined with optional chaining using .find
        const vote = votes?.find(
            (vote) => vote.username == session?.user?.name
        )?.upvote;

        setVote(vote);
    }, [data]);

    const upVote = async (isUpvote: boolean) => {
        if (!session) {
            toast("You'll need to sign in to vote!");
            return;
        }

        if (vote && isUpvote) return;
        if (vote === false && !isUpvote) return;

        const {
            data: { insertVote: newVote },
        } = await addVote({
            variables: {
                upvote: isUpvote,
                post_id: post?.id,
                username: session?.user?.name,
            },
        });
    };

    const displayVotes = (data: any) => {
        const votes: Vote[] = data?.getVotesByPostId;
        //Add up all the upvotes and downvotes
        const displayNumber = votes?.reduce(
            (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
            0
        );

        if (votes?.length === 0) return 0;
        if (displayNumber === 0) {
            return votes[0]?.upvote ? 1 : -1;
        }

        return displayNumber;
    };

    const renderFooter = () => {
        return (
            <div className='flex space-x-4 text-gray-400'>
                <div className='postButtons'>
                    <ChatAltIcon className='h-6 w-6' />
                    <p className='hidden sm:inline'>
                        {post.comments.length} Comments
                    </p>
                </div>
            </div>
        );
    };

    const renderVotes = () => {
        return (
            <div className='flex flex-col items-center justify-start space-y-1 rounded-l-md bg-white p-4 text-gray-400'>
                <ArrowUpIcon
                    onClick={() => upVote(true)}
                    className={`voteButtons hover:text-blue-500 ${
                        vote && 'text-blue-500'
                    }`}
                />
                <p className='text-xs font-bold text-black'>
                    {displayVotes(data)}
                </p>
                <ArrowDownIcon
                    onClick={() => upVote(false)}
                    className={`voteButtons hover:text-red-400 ${
                        vote === false && 'text-red-400'
                    }`}
                />
            </div>
        );
    };

    const renderHeader = () => {
        return (
            <div className='flex items-center space-x-2'>
                <Avatar seed={post.subreddit[0]?.topic} />
                <p className='text-xs text-gray-400'>
                    <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
                        <span className='font-bold text-black hover:text-blue-400 hover:underline'>
                            r/{post.subreddit[0]?.topic}
                        </span>
                    </Link>{' '}
                    - Posted by u/
                    {post.username} <TimeAgo date={post.created_at} />
                </p>
            </div>
        );
    };

    const renderPostImage = () => {
        return <img className='w-full' src={post.image} alt='' />;
    };

    const renderBody = () => {
        return (
            <div className='py-4'>
                <h2 className='text-xl font-semibold'>{post.title}</h2>
                <p className='mt-2 text-sm font-light'>{post.body}</p>
            </div>
        );
    };

    return (
        <Link href={`/post/${post.id}`}>
            <div className='flex cursor-pointer bg-white rounded-md border border-gray-300 shadow-sm hover:border hover:border-gray-600'>
                {/* Votes */}
                {renderVotes()}
                <div className='p-3 pb-1 '>
                    {/* Header */}
                    {renderHeader()}
                    {/* Body */}
                    {renderBody()}
                    {/* Image */}
                    {renderPostImage()}
                    {/* Footer */}
                    {renderFooter()}
                </div>
            </div>
        </Link>
    );
}

export default Post;
