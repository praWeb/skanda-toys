import React from 'react'
import {groq} from 'next-sanity'

import {getClient} from '../lib/sanity.server'

// @TODO: Clean up sanity client declaration in all page files
import sanityClient from '@sanity/client';

const configuredSanityClient = sanityClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true
});
