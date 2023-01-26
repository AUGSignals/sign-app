<script>
    import Employee from "../Employee.svelte";
    let message;
  
</script>
<Employee/>       
       
       <img src= {"https://augsignals.com/wp-content/uploads/logo/aug-logo-200x110.jpg"} alt="auglogo" height="67px" width="60px"/>   
       <div class="flex-grid">
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
     <div class="footer">
       <p>
         NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
     </p>
     </div>
    <button onClick={() => {
        navigator.clipboard.writable()
        message.info("Copied!")
      }}>
        Copy to Clipboard
      </button>
          
        
      
   
   <style>
    
     .footer {
       font-family:Verdana, Geneva, Tahoma, sans-serif ;
       color:black;
       display:grid;
       width:1000px;
       font-size: 12px;
      
     }
     button {
     background-color: transparent; 
     border-color:darkgrey
  }
  .flex-grid{
    width:400px;
    font-family:'Segoe UI';
    font-size: 14px;
  }
   </style>