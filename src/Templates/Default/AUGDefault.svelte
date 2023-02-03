<script>
   import Employee from "../Employee.svelte";
   import Clipboard from "svelte-clipboard";
   import { writable } from 'svelte/store';
    import { text } from "svelte/internal";
    
 export const user = writable({
      fullname: { },
      designation:{ },
      extension:{ },
      email: { }
    });
 
</script>

<Employee/>

<div class="footer">
	  <p>
		NOTICE: Confidential message which may be privileged. Unauthorized use/disclosure prohibited. If received in error, please notify the sender immediately and delete all copies and attachments.
	  </p>
	  <p>
		AVIS : Message confidentiel dont le contenu peut être privilégié. Utilisation/divulgation interdites sans permission. Si reçu par erreur, prière d'aviser immédiatement l'expéditeur et supprimer toutes les copies et les pièces jointes.
	  </p>
</div>

<Clipboard
      text ="some text" 
     let:copy
     on:copy={() => {
       alert('Copied')
     }}>
     <button on:click={copy(text)}>Copy to Clipboard</button>
   </Clipboard>  
      
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
   
  
  p {
    display:grid;
    width:350px;
  }
 
</style>