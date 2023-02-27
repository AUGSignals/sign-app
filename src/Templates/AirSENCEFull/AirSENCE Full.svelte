<script>
  import Employee from "../Employee.svelte";
  import  Clipboard from "svelte-clipboard"; 
 
  const user = ({
    fullname: "",
    designation:"",
    extension:"",
    email:  ""
  });
 
</script>
 <div>
   <Employee {...user}/>
 </div>


<div id = 'flex-grid'>
  <h3>
      Canada Address
  </h3>
  <p>73 Richmond Street West, Suite 103</p>
  <p>Toronto, Ontario, M5H 4E8 Canada</p>
  <h3>
      India Address
  </h3>
  <p>D-704 Niharika CHS Ltd. Kanakia Spaces, Opp. Lok Puram</p>
  <p>Nath-Pai Road, Thane (W), Maharashtra, India - 400610</p>
 </div>
  <hr />
<div class ='footer'>
  <p>
   NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
  </p>
</div>
<!-- copied text to clipboard-->
<Clipboard 
    text="<div id = 'empinfo'>
      <p><strong>{user.fullname}</strong></p>
      <p><strong>{user.designation}</strong></p>
      <p>Office:+1 416 923 4425 ext. {user.extension}</p>
      <p>Fax: +1 877 756 4628</p>
      <p>Email:<a href='mailto:{user.email}'>{user.email}</a></p>
     
      <a href='https://airsence.com/'>https://airsence.com/</a>
      <br/> 
        </div>
        <img src= https://augsignals.com/wp-content/uploads/logo/aug-logo-200x110.jpg classname='logo' alt='auglogo' height='60px' width='60px'/>        
       <img preview={false} classname='logo'  alt= 'airsencelogo' height='60px' widht='60px' src='https://augsignals.com/wp-content/uploads/logo/airsence-logo-234x130.png'>
       
        
        <div id = 'flex-grid'>
          <h3>
              Canada Address
          </h3>
          <p>73 Richmond Street West, Suite 103</p>
          <p>Toronto, Ontario, M5H 4E8 Canada</p>
          <h3>
              India Address
          </h3>
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
     <button  on:click={copy}>Copy </button>
</Clipboard>
<!-- style to airsencefull--> 
<style>
  :global(a:link) {
    color:#1890ff;
    }
  :global(.flex-grid){
    gap: 10px;
    padding-left:10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 12px;
    border-color: transparent;
     }
  :global(.footer ){ 
     color:black;
     padding-left:20px;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
     width:1100px;
     font-size: 12px; 
     }
 
  button {
    background-color:#1890ff ; 
    border-color:transparent;
    color:white;
    width:160px;
    margin-inline: 10px;
     }
  :global(.empinfo) {
     flex-direction: column;
     padding:30px;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
     grid-row: 1/4;
    }

</style>



