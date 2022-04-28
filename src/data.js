const miData = {
    
    aRecibos : [
        {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
        {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
        {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
        {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
    ],

    retForEach(){
        this.aRecibos.forEach((element)=>{
            console.log(element.cliente + " " + element.importe)
        });
    },
    
    retSort(){
        
        return this.aRecibos.sort((a,b)=>a.importe-b.importe)
    },
      
    retFilter(){
        return this.aRecibos.filter((element)=>element.cliente[0] == "R")
    },

    retMap(){
        return this.aRecibos.map((element)=>{return{ 
            id:element.id,
            numero:element.numero,
            importe:element.importe * 1.3,
            cliente:element.cliente
        }})
    }

}

export {miData}