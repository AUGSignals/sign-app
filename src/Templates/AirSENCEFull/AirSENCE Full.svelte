<script>
  import Clipboard from "svelte-clipboard";
	import { writable} from 'svelte/store';
    const user = writable({
    fullname: " ",
    designation:" ",
    extension:" ",
    email: " "
  });
</script>
<main>
<form class ="content">
    <label for="fullname">Full Name</label>
    <input type = "text" placeholder="Enter Full name" id="fullname" bind:value={user.fullname} required="true"/>
 
    <label for="designation">Designation</label>
    <input type = "text" placeholder="Enter Designation" id="designation" bind:value={user.designation} required="true" />
  
    <label for="extension">Extension</label>
    <input type = "text" placeholder="Enter Extension"  id="extension" bind:value={user.extension} required="true"/>

    <label for="email">Email</label>
    <input type = "text" placeholder="Enter Email" id= "email" bind:value={user.email} required="true"/>
</form>
<Clipboard
  text="<div id = 'empinfo'>
      <p><strong>{user.fullname}</strong></p>
			<p><strong>{user.designation}</strong></p>
      <p>Office:+1 416 923 4425 ext. {user.extension}</p>
      <p>Fax: +1 877 756 4628</p>
      <p>Email:<a href='mailto:{user.email}'>{user.email}</a></p>
      <a href='https://airsence.com/'>https://airsence.com/</a> 
        </div>
				<hr/>	
       <div id = 'flex-grid'>
        <h4>
            Canada Address
        </h4>
        <p>73 Richmond Street West, Suite 103</p>
        <p>Toronto, Ontario, M5H 4E8 Canada</p>
        <h4>
            India Address
        </h4>
        <p>D-704 Niharika CHS Ltd. Kanakia Spaces, Opp. Lok Puram</p>
        <p>Nath-Pai Road, Thane (W), Maharashtra, India - 400610</p>
       </div>

     <hr />
     <div class ='footer'>
    <p>
      NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
   </p>
    </div>"
  let:copy
  on:copy={() => {
    alert('Copied to Clipboard👏');
  }}>
  <button on:click={copy}>Copy</button>
</Clipboard>
</main>   
<style>
 :global(.flex-grid){
  
    padding-left:20px;
    font-size: 10px;
     }
  :global(.footer ){ 
     color:black;
     font-size: 14px; 
     }
	.content{
  display:grid;
  width:300px;
  align-items:center;
  grid-row-gap: 2px;
  border-radius: 0ch;
  font-size: 1.2em;
  margin-top:20px;
}
button {
  margin-top:20px;
  width:300px;
  align-items: center;
  background-color:rgb(3, 154, 214);
  border-color:transparent ;
  color:white;
  font-weight:20px;
}
:global(.icons){
  top:0;
  padding:10px;
  
}
:global(.empinfo) {
  padding:30px;
}
	:global(.p){
		font-size:12px;
	}
</style>
