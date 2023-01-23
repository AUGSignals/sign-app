<script>
    let name = "Email Generation Signature App";
    import Home from "./routes/Home.svelte";
    import Blog from "./routes/Blog.svelte";
    import About from "./routes/About.svelte";
   
    import { Router,Route, Link } from "svelte-routing";
    export let url=" ";
</script>

<header>
    {name}
</header>
<Router url="{url}">
    <nav>
        <Link to ="home">Home</Link>
        <Link to ="blog">Blog</Link>
        <Link to ="about">About</Link>
    </nav>
    <div>
        <Route path ="home" component="{Home}"/>
        <Route path ="blog" component="{Blog}"/>
        <Route path ="about" component="{About}"/>

    </div>
</Router>
    


<style>
    header{
        color:black;
        width:100%;
        background-color:rgb(6, 158, 218);
        text-align:center;
        font-size: 2em;
        text-align:center;
    }
    
    
</style>
<About/>
<Blog/>
<Home/>