import React from 'react';

import { Problem } from '@src/components/Problem/Problem';
import { algStudyUserInfo } from '@src/apis/user-list';
import { useUserCommitList } from './context/UserCommitListContext';
import { Goals } from './Goals';
import { Avatar } from './Avatar';


export const Profile: React.FC = () => {
	const commitList = useUserCommitList();
	console.log({ commitList });
	const firstCommit = commitList?.length > 0 ? commitList[0] : undefined;
	const author = firstCommit && firstCommit.author;

	const onClickOpenUserProfile = () =>
	 window.open(author?.htmlUrl);

	if (!author) return null;

	return (
		<article className="my-5 p-5 shadow-lg rounded-md flex flex-col w-full bg-white relative">
			<Avatar url={author.avatarUrl} />
				<span
					onClick={onClickOpenUserProfile}
					className="
						pt-16 self-center text-slate-700 text-xl cursor-pointer
						hover:text-cyan-500 transition
				">
					{ author.login }
				</span>
			<div className="Stiker flex" />
			<Goals
				username={author.login as keyof typeof algStudyUserInfo}
			/>
			<Problem />
		</article>
	);
};
