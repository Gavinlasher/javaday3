let guns =
    [
        { id: 1,
          name: 'shotgun',
          price: 350,
          imgUrl: 'https://static1-us.millenium.gg/articles/6/68/76/@/71487-1139403-call-of-duty-modern-warfare-open-beta-20190913191234-full-1-article_m-1.jpg'
        },
        { id: 2,
            name: 'm4',
            price: 750,
            imgUrl: 'https://www.pcgamesn.com/wp-content/uploads/2021/04/call-of-duty-warzone-best-m4a1-loadout-warzone.jpg'
          },
          { id: 3,
            name: 'sniper',
            price: 1250,
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDm9JQ8FDCa_IuSR46NwvfYQk3P810jDjYA&usqp=CAU'
          },
          { id: 4,
            name: 'granade',
            price: 20,
            imgUrl: 'https://media.istockphoto.com/photos/black-hand-grenade-with-safety-pin-attached-picture-id157637984?b=1&k=20&m=157637984&s=170667a&w=0&h=qw_ccZ0wLZjgmj1iOH9J3R73-fxGtp3YwmHxMMgnQl8='
          },
          { id: 5,
            name: 'smoke granade',
            price: 5,
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3W-5ghlKda4uBjTEBChSd2TkMMCTYMMHUg&usqp=CAU'
          },
    ]

let current = []
let total = 0


function drawItems(){
    let temp = ""
    for (let i = 0; i < guns.length; i++) {
        const gun = guns[i];
         temp += `
         <div class="col-4 text-light" onClick="addItem(${gun.id})">
         <img class="img-fluid" src="${gun.imgUrl}" alt="">
         <div class="d-flex justify-content-between bg-dark p-2">
             <h4>${gun.name}</h4>
             <p>$${gun.price}</p>
         </div>
                     </div>
                 


         `
    }
    document.getElementById('items').innerHTML = temp
}
function drawLayout(){
    let temp = ''
    for (let i = 0; i < current.length; i++) {
        const loadOut = current[i];
        temp += `
        <div class="col-12 p-0">
                <div class="d-flex justify-content-between bg-dark text-light p-0">
                    <h4 class="p-0"><i class="mdi mdi-skull-scan-outline"></i>${loadOut.name}</h4>
                    <p>${loadOut.price}</p>
                </div>
            </div>
        
        `
    }
    document.getElementById('cart').innerHTML = temp
    document.getElementById('total').innerText = total
}

function addItem(gunId){
    let findItem = guns.find(ban => ban.id === gunId)
    current.push(findItem)
    total += findItem.price
    drawLayout()
}
 function reset(){
     drawLayout()
     total = 0
    current = []
 }



drawItems()