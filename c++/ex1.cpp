#include <iostream>
using namespace std;

int main()
{
  int n;
  cout << "Enter the number: ";
  cin >> n;

  if (n <= 1)
    return n;
  int a = 0;
  int b = 1;
  int c;
  n = n - 1;
  while (n--)
  {
    c = a + b;
    a = b;
    b = c;
  }
  cout << "The value is " << c;
}

// n = 6;
// c = 1;
// a = 1;
// b = 1;

// n = 5;
// c = 2;
// a = 1
// b = 2

// n = 4
// c = 3
// a = 2
// b = 3

// n = 3
// c = 5
// a = 3
// b = 5

// n = 2
// c = 8
// a = 5
// b = 8

// n = 1;
// c = 13
// a = 8
// b = 13