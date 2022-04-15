exports.createResolvers = ({
	actions,
	cache,
	createNodeId,
	createResolvers,
	store,
	reporter,
}) => {
	const { createNode } = actions;
	createResolvers({
		StrapiPageContentArticleGallery: {
			imageFile: {
				type: `File`,
				resolve(source, args, context, info) {
					return createRemoteFileNode({
						url: `${source.url}`, // for S3 upload. For local: `http://localhost:1337${source.url}`,
						store,
						cache,
						createNode,
						createNodeId,
						reporter,
					});
				},
			},
		},
	});
};
