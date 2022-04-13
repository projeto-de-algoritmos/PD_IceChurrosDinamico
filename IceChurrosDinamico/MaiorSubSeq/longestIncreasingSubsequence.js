let max_ref;
module.exports = class MaiorSuqSeq {
    _lis(arr, n) {
        // base case
        if (n == 1)
            return 1;

        // 'max_ending_here' is length of LIS ending with arr[n-1]
        let res, max_ending_here = 1;
        /* Recursively get all LIS ending with arr[0], arr[1] ...
           arr[n-2]. If   arr[i-1] is smaller than arr[n-1], and
           max ending with arr[n-1] needs to be updated, then
           update it */
        for (let i = 1; i < n; i++) {
            res = this._lis(arr, i);
            if (arr[i - 1] < arr[n - 1] && res + 1 > max_ending_here)
                max_ending_here = res + 1;
        }
        // Compare max_ending_here with the overall max. And
        // update the overall max if needed
        if (max_ref < max_ending_here)
            max_ref = max_ending_here;

        // Return length of LIS ending with arr[n-1]
        return max_ending_here;
    }

    // The wrapper function for _lis()
    lis(arr, n) {
        // The max variable holds the result
        max_ref = 1;

        // The function _lis() stores its result in max
        this._lis(arr, n);

        // returns max
        return max_ref;
    }
}