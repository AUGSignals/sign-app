<script>
   import Employee from "../Employee.svelte";
   import Clipboard from "svelte-clipboard";
   import { writable} from 'svelte/store';
  
 
   
	
   //function useState(initValue){
   // let setValue
   // const nameStore = readable(initValue, set => {
	 //   setValue = set
   // })
   // nameStore.subscribe(value=>{})
   // return [nameStore,setValue]
//}
 
  // function copyToClipboard(element) {
  //var $temp = ("<input>");
  //("body").append($temp);
  //$temp.val((element).text()).select();
  //document.execCommand("copy");
  //$temp.remove();
  //}
  const user = writable({
      fullname: { },
      designation:{ },
      extension:{ },
      email: { }
    });  
    
</script>
<Employee/>
 
<Clipboard
    text = "<div id ='empinfo'>
      <p>{user.fullname}</p>
      <p>{user.designation}</p>
      <p>Office:+1 416 923 4425 ext.{user.extension}</p>
      <p>Fax: +1 877 756 4628</p>
      <p>Email:<a href='mailto:{user.email}'>{user.email}</a></p>
      <a href='https://augsignals.com/'>https://augsignals.com/</a>  
      </div>
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

  .footer {
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
   border-color:grey;
  }
   .empinfo {
    padding:30px;
  }
  
  p{
    display:grid;
    width:350px;
  }
 
 </style>

