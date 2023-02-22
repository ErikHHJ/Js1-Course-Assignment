import { displayLoading , hideLoading } from "./script.js";
const container = document.querySelector(".details-container");
const loader = document.querySelector("#loading");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const uuid = params.get("uuid");

const url = "https://valorant-api.com/v1/weapons/" + uuid;



const detailsCard = async () => {
    displayLoading()
    try {
        const res = await fetch(url);
        const results = await res.json();
        hideLoading()
        console.log(results)
        const title = document.querySelector(".title");
        const data = results.data
            const detailsImg = document.createElement("img");
            detailsImg.src = data.displayIcon
            const detailsTitle = document.createElement("h1");
            detailsTitle.innerHTML = data.displayName;
            title.innerHTML =  `${data.displayName} Weapon Details`
            document.title = `${data.displayName} Weapon Details`
            const detailsCost = document.createElement("h5");
            detailsCost.innerHTML = `Cost: ${data.shopData.cost}`

            const detailsStats = document.createElement("div");
            detailsStats.classList.add("stats");
            detailsStats.innerHTML = `<h5>Equip-time: ${data.weaponStats.equipTimeSeconds}s</h5>
            <h5>Fire-Rate: ${data.weaponStats.fireRate} rps</h5>
            <h5>First Bullet Accuracy: ${data.weaponStats.firstBulletAccuracy}</p>
            <h5>Magazine Size: ${data.weaponStats.magazineSize}</h5>
            <h5>Reload-time: ${data.weaponStats.reloadTimeSeconds}s</h5>`

            
            const div = document.createElement("div");
            div.classList.add("flexdiv");
            const divTitle = document.createElement("h5");
            const divImg = document.createElement("img");
            divImg.classList.add("killfeed");
            const category = document.createElement("h5");
            category.innerHTML = `Category: ${data.shopData.category}`

            divTitle.innerHTML = "Killfeed Icon:"
            divImg.src = data.killStreamIcon

            const damageRanges = document.createElement("h5");
            const div2 = document.createElement("div");
            div2.classList.add("rangestats");
            damageRanges.innerHTML = "Damage Ranges:";
            const rangeData = data.weaponStats.damageRanges;
            rangeData.forEach ((obj) => {
                const range = document.createElement("h5");
                range.innerHTML = `${obj.rangeStartMeters}m - ${obj.rangeEndMeters}m <br> Headshot: ${obj.headDamage} <br>
                Bodyshot: ${obj.bodyDamage} <br>
                Legshot: ${obj.legDamage}`
                div2.appendChild(range);
            })
            
            

            div.appendChild(divTitle);
            div.appendChild(divImg);
            container.appendChild(detailsTitle);
            container.appendChild(category);
            container.appendChild(detailsImg);
            container.appendChild(detailsCost);
            container.appendChild(detailsStats);
            container.appendChild(div);
            container.appendChild(damageRanges);
            container.appendChild(div2)


        
    }
    catch(error){
        
        console.log(error)
        const errorMsg = document.createElement("h2");
        errorMsg.classList.add("error");
        errorMsg.innerHTML = "An error occurred while fetching data, sorry for the inconvenience.";
        container.appendChild(errorMsg);
    }
}
detailsCard();
