


export function pushIssue(issue){
	console.log(issue)
	return {
        type: 'PUSH_ISSUE',
        issue
    };
}