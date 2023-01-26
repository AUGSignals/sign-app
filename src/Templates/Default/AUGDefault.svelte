<script>
 let message;

 import Employee from "../Employee.svelte";
 const outputString = "AUGDefault.svelte";
 
</script>

<Employee/>
  <img src= {"https://augsignals.com/wp-content/uploads/logo/aug-logo-200x110.jpg"} alt="auglogo" height="150px" width="250px"/>   
  <hr />
  <div class="footer">
    <p>
      NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
    </p>
    <p>
      AVIS : Message confidentiel dont le contenu peut être privilégié. Utilisation/divulgation interdites sans permission. Si reçu par erreur, prière d'aviser immédiatement l'expéditeur et supprimer toutes les copies et les pièces jointes.
    </p>
  </div>
  <button on:Click="{() => {
    navigator.clipboard.writeText(outputString)
    message.info("Copied!")
  }}">
    Copy to Clipboard
  </button>
     
   

<style>
  .footer {
    font-family:sans-serif ;
    color:black;
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
</style>