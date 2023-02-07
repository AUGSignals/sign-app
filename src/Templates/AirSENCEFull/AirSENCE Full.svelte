<script>
    import Employee from "../Employee.svelte";
    import Clipboard from "svelte-clipboard"; 
    import { writable} from 'svelte/store';
    import {copy} from "svelte-clipboard";

    export const user = writable({
      fullname: { },
      designation:{ },
      extension:{ },
      email: { }
    });
    
</script>
<Employee/>       
  <!--  <img src= https://augsignals.com/wp-content/uploads/logo/aug-logo-200x110.jpg alt='auglogo' height='67px' width='60px'/>   
      <div class='flex-grid'>
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
    <div calss='footer'>
      <p>
        NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
    </p>
    </div> -->
    <!-- copied text to clipboard-->
     <Clipboard>
      text= "<div class='emp-info'>
        <p>{user.fullname}</p>
        <p>{user.designation}</p>
        <p>Office:+1 416 923 4425 ext.{user.extension}</p>
        <p>Fax: +1 877 756 4628</p>
        <p>Email:<a href="mailto:`email`?subject=subject& body= body">{user.email}</a></p>
        <a href='https://airsence.com/'>https://airsence.com/</a> 
          </div>
         <div class = 'flex-grid'>
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
       <div class = 'footer'>
      <p>
        NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
     </p>
      </div>"

      let:copy
       on:copy={() => {
        alert('Copied')
       }}>
       <button on:click={ copy }>Copy to clipboard</button>
    </Clipboard>
    
 <style>
   .emp-info {
    padding:30px;
  }
  
    .flex-grid{
      width:400px;
      font-family:'Segoe UI';
      font-size: 14px;
       }
    .footer { 
       font-family: "Verdana, Geneva, Tahoma, sans-serif" ;
       color:black;
       display:grid;
       width:'1000px';
       font-size: 12px; 
       }
    button {
      background-color: transparent; 
      border-color:darkgrey;
       }
     
  
  </style>






