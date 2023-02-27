<script>
    let selectedIndex = 0;
    export let user =({
    fullname: "",
    designation:"",
    extension:"",
    email:  ""
  });
 
</script>
  
<div class="vertical-tab-container">
    <ul class="vertical-tab">
        <li><a href = "/">AUG Default</a></li>
        
       <li><a href = "/">AirSENCE Short</a></li>
        
       <li><a href = "/">AirSENCE Full</a></li>
</ul>
  
    <div class="vertical-tab-content">
        {#if selectedIndex == 0}  
          
        <form class ="content"  >
 
            <label for="fullname">Full Name</label>
            <input type = "text" placeholder="Enter Full name" id="fullname" bind:value={user.fullname} required="true"/>
         
            <label for="designation">Designation</label>
            <input type = "text" placeholder="Enter Designation" id="designation" bind:value={user.designation} required="true"  />
          
            <label for="extension">Extension</label>
            <input type = "text" placeholder="Enter Extension"  id="extension" bind:value={user.extension} required="true"/>
        
            <label for="email">Email</label>
            <input type = "text" placeholder="Enter Email" id= "email" bind:value={user.email} required="true"/>
        </form>
        {:else if selectedIndex == 1}
            <h2>Second Tab Heading</h2>
            <p>some random text</p> 
            {:else}
            <h2>Third Tab Heading</h2>
            <p>last content</p>
            {/if}
    </div>
  </div>
  
  <style>
    .vertical-tab-container {
        display: flex;
        flex-direction: row;
        align-items: top;
        border: 2px solid #1890ff;
        border-radius: 0.5rem;
    }
  
    .vertical-tab {
        margin: 0px;
        padding: 4rem;
        list-style: none;
        border-right: 1px solid #1890ff;
        height:810px;
    }
  
    .vertical-tab li {
        margin: 3rem 0;
    }
  
    .vertical-tab-content {
        padding:20px;
        flex:6;
  
    }
    .content{
  top:20px;
  display:grid;
  width:280px;
  align-items:center;
  grid-row-gap: 8px;
  border-radius: 0ch;
  font-size: 1em;
  margin-top:40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

}



:global(.empinfo) {
  padding:30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
  </style>