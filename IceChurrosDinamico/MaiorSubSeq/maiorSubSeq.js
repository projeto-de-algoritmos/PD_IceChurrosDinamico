module.exports = class MaiorSuqSeq {
    //logica tirada do pseudocodigo do slide de Kevin Wayne
    findRange(n, vet) {
       var marcadorSeq = Array(vet.length).fill(1);
       var predecessor = Array(vet.length).fill(-1);
      
        for (var i = 1; i < n; i++) {
           marcadorSeq[i] = 1;
            predecessor[i] = 0;
            for (var j = 1; j < i;j++) {

                if (vet[j] < vet[i] && 1+marcadorSeq[j] > marcadorSeq[i] ) {
                    marcadorSeq[i] = 1 + marcadorSeq[j];
                    predecessor[i] = j;
                }

            }

        }
       // console.log(marcadorSeq)
       // console.log(predecessor)

        var maiorK = 0;
        var maximo = marcadorSeq[0];
     
        for (var k = 1; k < marcadorSeq.length; k++) {
            //msc = Math.max(msc, L[k]);
            if (marcadorSeq[k] > maximo) {
                //guarda
                maiorK = k;
                maximo = marcadorSeq[k];
            }
           
        }
      
        return { maiorK, marcadorSeq, predecessor, vet, maximo };

    }

    maiorSeq2(n, vet) {
        var result = this.findRange(n, vet);
        var maiorSeq = [];
        var j = result.maiorK; // guarda maior
        var index = [];
        for (var i = 0; j >= 0; i++) {
            maiorSeq.unshift(result.vet[j]);
            // colocar crescente
            index.unshift(j);
            j = result.predecessor[j];
        }
       // console.log(result.predecessor + ' ---' + result.maximo + '---' + result.marcadorSeq);
       //retorna valores e os indexs
        return { maiorSeq , index };
    }




}