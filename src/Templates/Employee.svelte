
<script>
 import { writable } from 'svelte/store';
 
 export const user = writable({
      fullname: { },
      designation:{ },
      extension:{ },
      email: { }
    });
    
 import { LinkedinBrand, FacebookBrand,TwitterBrand, YoutubeBrand} from "svelte-awesome-icons";
 function myFunction() {
  // Get the text field
  var submit = document.getElementById("myInput");

  // Select the text field
  submit.select();
  submit.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(submit.value);
  
  // Alert the copied text
  alert("Copied the text: " + submit.value);
}
</script>
<slot>
</slot>
  
 
  <form class ="content">
   
      <label for="text">Full Name</label>
      <input  placeholder="Enter Full name" id="myInput" bind:value={user.fullname} required="true"/>
   
      <label for="text">Designation</label>
      <input placeholder="Enter Designation" id="myInput" bind:value={user.designation} required="true" />
    
      <label for="text">Extension</label>
      <input placeholder="Enter Extension" id="myInput" bind:value={user.extension} required="true"/>
    
      <label for="text">Email</label>
      <input placeholder="Enter Email" id="myInput" bind:value={user.email} required="true"/>
    
    
    <button onclick = "myFunction()">submit</button>
 
  
  </form>
  <div class="emp-info">
    <p>{user.fullname}</p>
    <p>{user.designation}</p>
    <p>Office:+1 416 923 4425 ext.{user.extension}</p>
    <p>Fax: +1 877 756 4628</p>
    <p>Email:<a href="mailto:`email`?subject=subject&body=body">{user.email}</a></p>
    <a href="https://airsence.com/">https://airsence.com/</a>  
   
  </div>
  <div class="icons" >
									
    <LinkedinBrand class="h-6 w-6 text-blue-500 w-1/8 m-1" href= "http://www.linkedin.com/in/airsence-augsignals"/>
    <FacebookBrand class="h-6 w-6 text-blue-500 w-1/8 m-1" href="https://www.facebook.com/AUG-Signals-230943220403645" />
    <TwitterBrand class="h-6 w-6 text-blue-500 w-1/8 m-1"/>
    <YoutubeBrand class="h-6 w-6 text-red-500 w-1/8  m-1"/>
  </div>
  
    

  
  
 
 <style>
  .content{
    top:20px;
    display:grid;
    width:280px;
    align-items:center;
    grid-row-gap: 5px;
    border-radius: 0ch;
    font-size: 1.1em;
    margin-top:30px;
    
  
  }
  button {
    width:100px;
    align-items: center;
    background-color:rgb(3, 154, 214);
    border-color:transparent ;
    color:white;
    font-weight:20px;
  }
  p {
    display:grid;
    width:350px;
    

  }
  .emp-info {
    padding:30px;
  }
  .icons{
    top:0;
    padding-left:25px;
    
  }
</style>

