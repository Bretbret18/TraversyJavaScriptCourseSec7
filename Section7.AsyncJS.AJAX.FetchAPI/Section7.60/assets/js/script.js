// AJAX CALL with JSON
document.querySelector('#button1').addEventListener
('click', loadCustomers);

document.querySelector('#button2').addEventListener
('click', loadCustomers);


function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            // Parse from JSON to text variable
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer){
                output += `
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li> Company: ${customer.company}</li>
                <li> Phone: ${customer.phone}</li>
                </ul>
                `;
            });

        document.querySelector('#customers').innerHTML =
         output;
        }
    };


    xhr.send();
}

