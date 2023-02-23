
const url = "https://valorant-api.com/v1/weapons";
const container = document.querySelector(".container");
const loader = document.querySelector("#loading");

export const displayLoading = () => {
    loader.classList.add("display");
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000)
}
export const hideLoading = () => {
    loader.classList.remove("display");
}


const getData = async () => {
    displayLoading()
    try {
        const res = await fetch(url);
        const results = await res.json();
        hideLoading()
        console.log(results);
        
        for (let i = 0; i < results.data.length; i++) {
            const obj = results.data[i]
            if (!obj.shopData){
                continue
            }
            const div = document.createElement("div");
            div.classList.add("card");

            
            
    
            const cardImg = document.createElement("img");
            cardImg.src = obj.displayIcon;
            const cardTitle = document.createElement("h3");
            cardTitle.innerHTML = obj.displayName;
            const cardCost = document.createElement("h5");
            cardCost.innerHTML = `Cost: ${obj.shopData.cost}`;
            

            const stats = document.createElement("div");
            stats.innerHTML = `<h5>Equip-time: ${obj.weaponStats.equipTimeSeconds}s</h5>
            <h5>Fire-Rate: ${obj.weaponStats.fireRate} rps</h5>
            <h5>First Bullet Accuracy: ${obj.weaponStats.firstBulletAccuracy}</p>
            <h5>Magazine Size: ${obj.weaponStats.magazineSize}</h5>
            <h5>Reload-time: ${obj.weaponStats.reloadTimeSeconds}s</h5>`;
            const detailsLink = document.createElement("a");
            detailsLink.href = `./details.html?uuid=${obj.uuid}`;
            detailsLink.innerHTML = "Details"
            
            
            
            div.appendChild(cardTitle);
            div.appendChild(cardImg);
            div.appendChild(cardCost);
            div.appendChild(stats);
            div.appendChild(detailsLink);
            container.appendChild(div);
    
    
        }
    } catch (error) {
        const errorDiv = document.querySelector(".errorDiv");
        console.log(error)
        const errorMsg = document.createElement("h2");
        errorMsg.classList.add("error");
        errorMsg.innerHTML = "An error occurred while fetching data, sorry for the inconvenience.";
        errorDiv.appendChild(errorMsg);
        
        

    }
        }
        
            
   

getData();
console.log(new Date(1630368000000))

