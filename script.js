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

let job1 = {
    Banglore: [{
        role: "Backend Engineer",
        code: "BEE",
    },
    {
        role: "Business Analyst",
        code: "CRMBA",
    },
    {
        role: "Technical Consultant",
        code: "MSSQL",
    },
    {
        role: "Senior Developer",
        code: "REACTCON",
    }
    ],

    Chennai: [{
        role: "Backend Engineer",
        code: "BEE",
    },
    {
        role: "Project Manager - Implementation",
        code: "PMHRPOOI",
    },
    {
        role: "Payroll Implementation Consultant",
        code: "HRPOOI",
    },
    {
        role: "Senior System Analyst (SQL)",
        code: "INDSQLDEV",
    },
    {
        role: "Senior Business Analyst",
        code: "WMSFC",
    },
    ],

    Mumbai: [{
        role: "Payroll Processor",
        code: "BPOPP",
    },
    {
        role: "Service Delivery Manager - Payroll",
        code: "BPOSDM",
    },
    {
        role: "Payroll Specialist",
        code: "BPOPS",
    },
    {
        role: "Head- Customer Success",
        code: "AADHCS",
    }
    ],

    Delhi: [{
        role: "Content Editor",
        code: "GMSCME",
    },
    {
        role: "Content Writer",
        code: "cw01",
    },
    {
        role: "FC",
        code: "AAD-Implementation Head",
    },
    {
        role: "TC",
        code: "power Bl - ERP",
    },
    ],

    Madurai: [{
        role: "TC",
        code: "Java and oracle",
    },
    {
        role: "TC",
        code: "SQL",
    },
    {
        role: "Partnership Operations Manager",
        code: "Marketing - Partnership operations Manager",
    },
    {
        role: "TC",
        code: "React JS",
    }
    ]
}

function scroll_to_bottom() {
    document.getElementById('details').scrollIntoView({
        behavior: 'smooth'
    });

}

function initMap() {
    let loc;
    let temp;
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

            infoWindow.open(map, marker);
            let place = Object.keys(job1);
            details.innerHTML = ' ';
            console.log("[place]" + job1[place[0]][0].role);

            for (let i = 0; i < place.length; i++) {

                if (place[i] == marker.title) {
                    loc = job1[place[i]];

                    details.innerHTML += `<div class="col-12 d-flex justify-content-between pt-5">
                                         <h5>Job Location : <span>${marker.title}</span></h5>
                                         <h5>Open Positions : <span>${loc.length}</span></h5>
                                     </div>`

                    for (let i = 0; i < loc.length; i++) {
                        temp = ' ';
                        temp = marker.title;
                        console.log("temp" + temp);
                        for (let j = 0; j < place.length; j++) {

                            if (place[j] != marker.title) {

                                for (let k = 0; k < job1[place[j]].length; k++) {
                                    console.log("loc[" + i + "].role is" + loc[i].role);
                                    console.log("job1[place[" + j + "]][" + k + "].role is" + job1[place[j]][k].role);
                                    if ((loc[i].role == job1[place[j]][k].role) && (loc[i].code == job1[place[j]][k].code)) {
                                        console.log("gdshjds");
                                        temp += ' | ' + place[j];
                                        console.log("temp" + temp);
                                    }
                                }
                            }
                        }

                        details.innerHTML += ` <div class="col-md-6 col-12 pt-4">
                                               <div class="card shadow-lg border-0">
                                                   <div class="card-body h-100 d-flex justify-content-between px-4 py-4">
                                                       <div class="card-left">
                                                           <h6 class="card-title">${loc[i].role}</h6>
                                                           <p class="card-text">${temp}</p>
                                                       </div>
                                                       <div class="card-right">
                                                           <h6 class="card-code">Job Code</h6>
                                                           <p class="card-text">${loc[i].code}</p>
                                                       </div>
                                                   </div>
                                                 </div>
                                           </div>`
                        console.log("234657");
                    }
                }
            }

            setTimeout(scroll_to_bottom, 500);

            setTimeout(closeinfoWindow, 3000);

            function closeinfoWindow() {
                infoWindow.close();
            }
        });
    }
}



