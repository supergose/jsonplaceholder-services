console.log("Serve jsonplaceholder services project.");

import { PostService } from './index.js';

async function getPosts() {
    const response = await PostService.getPosts();
    console.log('Posts:', response.data);
}

getPosts();
