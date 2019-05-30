struct Solution{
}

impl Solution {
    pub fn sort_array_by_parity(a: Vec<i32>) -> Vec<i32> {
        let mut b = a;
        b.sort_by(|a, b| {
            let tmp1 = a % 2; 
            let tmp2 = b % 2; 
            tmp1.cmp(&tmp2)
        });
        return b;
    }
}

fn main() {
    let vec = vec![3, 6, 4, 5, 3];
    println!("{:?}", Solution::sort_array_by_parity(vec));
}
