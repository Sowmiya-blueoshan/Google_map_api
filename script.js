let location1 = [
    {
        name: "Chennai",
        lat: 13.100824757323759,
        long: 80.2556049490453
    },
    {
        name: "Banglore",
        lat: 12.988584844003547,
        long: 77.55942963489213
    },
    {
        name: "Mumbai",
        lat: 19.10012652001873,
        long: 72.85774429160598
    },
    {
        name: "Delhi",
        lat: 28.70754217568292,
        long: 77.21811156104617
    },
    {
        name: "Madurai",
        lat: 9.93101603359414,
        long: 78.11423443313859
    }
]

let job1 = [
    {
        role: "Backend Engineer",
        code: "BEE",
        city: "Banglore",
        country: "India"
    },
    {
        role: "Business Analyst",
        code: "CRMBA",
        city: "Banglore",
        country: "India"
    },
    {
        role: "Technical Consultant",
        code: "MSSQL",
        city: "Delhi",
        country: "India"
    },
    {
        role: "Senior Developer",
        code: "REACTCON",
        city: "Delhi",
        country: "India"
    }
    ,

    {
        role: "Project Manager - Implementation",
        code: "PMHRPOOI",
        city: "Chennai | Banglore | Mumbai",
        country: "India"
    },
    {
        role: "Payroll Implementation Consultant",
        code: "HRPOOI",
        city: "Chennai | Banglore | Mumbai",
        country: "India"
    },
    {
        role: "Senior System Analyst (SQL)",
        code: "INDSQLDEV",
        city: "Chennai",
        country: "India"
    },
    {
        role: "Senior Business Analyst",
        code: "WMSFC",
        city: "Chennai | Banglore | Mumbai",
        country: "India"
    },


    {
        role: "Payroll Processor",
        code: "BPOPP",
        city: "Chennai | Banglore",
        country: "India"
    },
    {
        role: "Service Delivery Manager - Payroll",
        code: "BPOSDM",
        city: "Chennai | Banglore | Delhi",
        country: "India"
    },
    {
        role: "Payroll Specialist",
        code: "BPOPS",
        city: "Chennai | Banglore | Delhi",
        country: "India"
    },
    {
        role: "Head- Customer Success",
        code: "AADHCS",
        city: "Chennai | Banglore",
        country: "India"
    }
    ,

    {
        role: "Content Editor",
        code: "GMSCME",
        city: "Mumbai",
        country: "India"
    },
    {
        role: "Content Writer",
        code: "cw01",
        city: "Mumbai",
        country: "India"
    },
    {
        role: "FC",
        code: "AAD-Implementation Head",
        city: "Chennai",
        country: "India"
    },
    {
        role: "TC",
        code: "power Bl - ERP",
        city: "Chennai",
        country: "India"
    },

    {
        role: "TC",
        code: "Java and oracle",
        city: "Madurai",
        country: "India"
    },
    {
        role: "TC",
        code: "SQL",
        city: "Madurai",
        country: "India"
    },
    {
        role: "Partnership Operations Manager",
        code: "Marketing - Partnership operations Manager",
        city: "Madurai",
        country: "India"
    },
    {
        role: "TC",
        code: "React JS",
        city: "Madurai",
        country: "India"
    }

]

function scroll_to_bottom() {
    document.getElementById('details').scrollIntoView({
        behavior: 'smooth'
    });

}

function initMap() {
    let count = 0;
    let job2 = [];
    let center = { lat: 22.87139059648272, lng: 78.84618785140242 };
    let map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 4,
        mapId: 'b1e8fd84c87e62f3',
        //  mapTypeControl:false,
        //  fullscreenControl:false,
        //  streetViewControl:false
    });

    for (let i = 0; i < location1.length; i++) {

        let center = { lat: location1[i].lat, lng: location1[i].long };

        let marker = new google.maps.Marker({
            position: center,
            map: map,
            title: location1[i].name
        });

        let infoWindow = new google.maps.InfoWindow({
            content: 'Location :' + location1[i].name + '<br>' + 'Country : India'
        });

        let details = document.getElementById('details');

        marker.addListener('click', function () {
            details.innerHTML = ' ';
            count = 0;
            infoWindow.open(map, marker);

            let data = job1.filter((data) => {
                let text = data.city.split('|');
                console.log("text" + text);
                for (let i = 0; i < text.length; i++) {
                    console.log("text[" + i + "]" + text[i]);
                    if (marker.title == (text[i])) {
                        console.log("sds");
                        count += 1;
                        return data;
                    }
                }
            })
            console.log(data);
            console.log(count);

            details.innerHTML += `<div class="col-12 d-flex justify-content-between pt-5">
           <h5>Job Location : <span>${marker.title}</span></h5>
           <h5>Open Positions : <span>${count}</span></h5>
           </div>`

            for (let i = 0; i < data.length; i++) {

                details.innerHTML += ` <div class="col-md-6 col-12 pt-4">
                                           <div class="card shadow-lg border-0">
                                               <div class="card-body h-100 d-flex justify-content-between px-4 py-4">
                                                   <div class="card-left">
                                                       <h6 class="card-title">${data[i].role}</h6>
                                                       <p class="card-text">${data[i].city}</p>
                                                   </div>
                                                   <div class="card-right">
                                                       <h6 class="card-code">Job Code</h6>
                                                       <p class="card-text">${data[i].code}</p>
                                                   </div>
                                               </div>
                                             </div>
                                       </div>`

            }




            setTimeout(scroll_to_bottom, 500);

            setTimeout(closeinfoWindow, 3000);

            function closeinfoWindow() {
                infoWindow.close();
            }
        });
    }
}




