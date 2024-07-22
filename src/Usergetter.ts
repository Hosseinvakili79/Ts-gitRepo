class User {
  constructor(private email: string) {}

  get isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}
const user = new User("test@gmail.com");
console.log(user.isValidEmail);
const invalidUser = new User("invalid-email");
console.log(invalidUser.isValidEmail);

