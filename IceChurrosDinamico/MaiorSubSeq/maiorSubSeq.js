module.exports = class MaiorSuqSeq {




    findRange(n, vet) {
        var L = [];
        var pre = [];
        for (var i = 1; i < n; i++) {
            L[i] = 1;
            pre[i] = 0;
            for (var j = 1; j < i - 1;j++) {

                if (vet[j] < vet[i] && 1+L[j] > L[i] ) {
                    L[i] = 1 + L[j];
                    pre[i] = j;
                }

            }

        }

        var msc = 0;
        for (var k = 1; k < n; k++) {
            msc = Math.max(msc, L[k]);
        }
       
        return msc;

    }





}