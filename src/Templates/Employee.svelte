
<script>
  import { LinkedinBrand, FacebookBrand,TwitterBrand, YoutubeBrand} from "svelte-awesome-icons";
 
  export const user = ({
    fullname: "",
    designation:"",
    extension:"",
    email: ""
  });

</script>


<form class ="content" >
 
    <label for="fullname">Full Name</label>
    <input type = "text" placeholder="Enter Full name" id="fullname" bind:value={user.fullname} required="true"/>
 
    <label for="designation">Designation</label>
    <input type = "text" placeholder="Enter Designation" id="designation" bind:value={user.designation} required="true" />
  
    <label for="extension">Extension</label>
    <input type = "text" placeholder="Enter Extension"  id="extension" bind:value={user.extension} required="true"/>

    <label for="email">Email</label>
    <input type = "text" placeholder="Enter Email" id= "email" bind:value={user.email} required="true"/>
  
  
  

 

</form>
<div id = 'empinfo'>
  <p><strong>{user.fullname}</strong></p>
  <p><strong>{user.designation}</strong></p>
  <p>Office:+1 416 923 4425 ext. {user.extension}</p>
  <p>Fax: +1 877 756 4628</p>
  <p>Email:<a href='mailto:{user.email}'>{user.email}</a></p>
  <a href='https://airsence.com/'>https://airsence.com/</a> 
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

.icons{
  top:0;
  padding:10px;
  
}
:global(.empinfo) {
  padding:30px;
}
</style>
