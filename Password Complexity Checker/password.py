import re

def check_password_strength(password):
    strength_criteria = {
        "length": len(password) >= 8,
        "uppercase": bool(re.search(r"[A-Z]", password)),
        "lowercase": bool(re.search(r"[a-z]", password)),
        "digit": bool(re.search(r"\d", password)),
        "special": bool(re.search(r"[@$!%*?&#]", password))
    }
    
    strength_score = sum(strength_criteria.values())
    
    if strength_score == 5:
        strength = "Very Strong"
    elif strength_score == 4:
        strength = "Strong"
    elif strength_score == 3:
        strength = "Moderate"
    elif strength_score == 2:
        strength = "Weak"
    else:
        strength = "Very Weak"
    
    feedback = [
        "Password should be at least 8 characters long." if not strength_criteria["length"] else "",
        "Include at least one uppercase letter." if not strength_criteria["uppercase"] else "",
        "Include at least one lowercase letter." if not strength_criteria["lowercase"] else "",
        "Include at least one digit." if not strength_criteria["digit"] else "",
        "Include at least one special character (@$!%*?&#)." if not strength_criteria["special"] else ""
    ]
    
    feedback = [f for f in feedback if f]
    
    return strength, feedback

if __name__ == "__main__":
    password = input("Enter your password: ")
    strength, feedback = check_password_strength(password)
    print(f"Password Strength: {strength}")
    if feedback:
        print("Suggestions:")
        for suggestion in feedback:
            print(f"- {suggestion}")
