<script>
   import Employee from "../Employee.svelte";
   import Clipboard from "svelte-clipboard";
  const user = writable({
      fullname: { },
      designation:{ },
      extension:{ },
      email: { }
    });  
    
</script>
<Employee {...user}/>

<img src= "https://augsignals.com/wp-content/uploads/logo/aug-logo-200x110.jpg" classname="logo" alt='auglogo' height='350px' width='200px'/>
<div id ='footer'>
  <p>
  NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
  </p>   
 </div>       
<Clipboard
    text = "<div id ='empinfo'>
      <p>{user.fullname}</p>
      <p>{user.designation}</p>
      <p>Office:+1 416 923 4425 ext.{user.extension}</p>
      <p>Fax: +1 877 756 4628</p>
      <p>Email:<a href='mailto:{user.email}'>{user.email}</a></p>
      <a href='https://augsignals.com/'>https://augsignals.com/</a>  
      </div>
      <img src= 'https://augsignals.com/wp-content/uploads/logo/aug-logo-200x110.jpg' classname='logo' alt='auglogo' height='350px' width='200px'/>
      <div id ='footer'>
       <p>
       NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
       </p>   
      </div>"
    let:copy
    on:copy={() => {
       alert('Copied')
     }}>
     <button on:click={copy}>Copy to Clipboard</button>
   </Clipboard>  

      
<style>

  :global(.footer) {
    color: black;
    font-family:'sans-serif';
    padding:30px;
    display:grid;
    width:1000px;                                                                                                                                                                                               
    font-size: 12px;
  }
  button {
   margin-left:30px;
   background-color: transparent; 
   color:#1890ff;
  }
   :global(.empinfo) {
    padding:30px;
  }
  
  :global(.p){
    display:grid;
    width:350px;
  }
 
 </style>

