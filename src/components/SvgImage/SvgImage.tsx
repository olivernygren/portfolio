import React from 'react';
import { Typography } from '@mui/material';

interface ISvgImage {
	svg: any;
	file: any;
	alt: any;
	width?: number;
}

// Render inline SVG with fallback non-svg images
export const SvgImage = ({ svg, file, alt, width }: ISvgImage) => {
	if (file.contentType === 'image/svg+xml') {
		if (svg && svg.content) {
			// Inlined SVGs
			return (
				<div
					dangerouslySetInnerHTML={{ __html: svg.content }}
					style={{ width: width }}
				/>
			);
		}

		// SVGs that can/should not be inlined
		return <img src={file.url} alt={alt} />;
	}

	// Error handler
	return <Typography>Fil kan ej renderas</Typography>;
};

export default SvgImage;
