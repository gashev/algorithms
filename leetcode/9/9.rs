struct Solution {}

impl Solution {
	pub fn is_palindrome(x: i32) -> bool {
		if x < 0 {
			return false;
		}

		let mut tmp: i32 = 0;
		let mut number: i32 = x;
		while number > 0 {
			let digit: i32 = number % 10;
			tmp = tmp * 10 + digit;
			number = (number - digit) / 10;
		}
		return x == tmp; 
    }
}

fn main() {
	println!("{:?}", Solution::is_palindrome(121));
}
