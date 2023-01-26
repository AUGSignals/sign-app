<script>
 let message;
 import Employee from "../Employee.svelte";
</script>
<Employee/>    
    
    <img src= {"https://augsignals.com/wp-content/uploads/logo/aug-logo-200x110.jpg"} alt="auglogo"  height="90px" width="130px"/>   
    <div class= " flex-grid">
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
    font-family:sans-serif ;
    color:black;
  
    display:grid;
    width:1000px;
    font-size: 13px;
   
  }
  button {
  
   background-color: transparent; 
   border-color:rgb(182, 175, 175)
  }
  .flex-grid{
    width:400px;
    font-family:'Segoe UI';
    font-size: 14px;
  }
</style>