function generateManagerCard(name, id, email, officeNum) {
   return `
    <div class="card border-light mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h3>${name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Office #: ${officeNum}</li>
        </ul>
        </div>
    </div>` 
}

function generateEngineerCard(name, id, email, github) {
    return `
     <div class="card border-light mb-3" style="max-width: 18rem;">
         <div class="card-header">
             <h3>${name}</h3>
             <h4>Engineer</h4>
         </div>
         <div class="card-body">
         <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${id}</li>
             <li class="list-group-item">Email: ${email}</li>
             <li class="list-group-item">Github: ${github}</li>
         </ul>
         </div>
     </div>` 
 }

 function generateInternCard(name, id, email, school) {
    return `
     <div class="card border-light mb-3" style="max-width: 18rem;">
         <div class="card-header">
             <h3>${name}</h3>
             <h4>Intern</h4>
         </div>
         <div class="card-body">
         <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${id}</li>
             <li class="list-group-item">Email: ${email}</li>
             <li class="list-group-item">School: ${school}</li>
         </ul>
         </div>
     </div>` 
 }

module.exports = {generateManagerCard, generateEngineerCard, generateInternCard};
