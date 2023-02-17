const container = document.querySelector(".details-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const uuid = params.get("uuid");

const url = "https://valorant-api.com/v1/weapons/" + uuid;



const detailsCard = async () => {
    try {
        const res = await fetch(url);
        const results = await res.json();
        console.log(results)

        Object.keys(results).forEach(() => {
            const detailsImg = document.createElement("img");
            detailsImg.src = results.data.displayIcon
            const detailsTitle = document.createElement("h1");
            detailsTitle.innerHTML = results.data.displayName;

           /* const detailsStats = document.createElement("div");
            detailsStats.innerHTML = `<h5>Equip-time: ${results.data.weaponStats.equipTimeSeconds}s</h5>
            <h5>Fire-Rate: ${results.data.weaponStats.fireRate} rps</h5>
            <h5>First Bullet Accuracy: ${results.data.weaponStats.firstBulletAccuracy}</p>
            <h5>Magazine Size: ${results.data.weaponStats.magazineSize}</h5>
            <h5>Reload-time: ${results.data.weaponStats.reloadTimeSeconds}s</h5>`*/
            
            container.appendChild(detailsTitle);
            container.appendChild(detailsImg);
            container.appendChild(detailsStats);
            

        })
        
    }
    catch(error){
        console.log(error)

    }
}
detailsCard();
