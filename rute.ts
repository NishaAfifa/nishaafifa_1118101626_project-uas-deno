import {Router} from 'https://deno.land/x/oak/mod.ts';
import {home, product} from './controllers/blog.ts';

const router = new Router;

router
.get("/", home)
.get("/about", home)
.get("/product", product)

export default router;