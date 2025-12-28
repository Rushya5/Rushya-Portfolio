import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `M. Rushya Shrungan | Full Stack Developer & AI Developer - ${pageTitle}`;
	}, [pageTitle]);
};
