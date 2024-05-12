def create_matrix(key, list1=['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']):
    compElements,matrix = [],[]
    for i in key:
        if i not in compElements:
            compElements.append(i) 
    for i in list1:
        if i not in compElements:
            compElements.append(i)
    while compElements != []:
        matrix.append(compElements[:5])
        compElements = compElements[5:] 
    return matrix
def addBuffer(message):
    index = 0
    while (index < len(message)-1):
        l1,l2 =message[index], message[index + 1]
        if l1 == l2:
            message = message[:index + 1] + "X" + message[index + 1:]
        index += 2
    if len(message)%2!=0:
        message+='X'
    return message
def indexOf(letter, matrix):
    for i in range(5):
        try:
            index = matrix[i].index(letter)
            return (i, index)
        except:
            continue
def playfair(key, message, encrypt=True):
    inc = 1 if encrypt else -1
    matrix = create_matrix(key)
    message = message.replace(' ', '')
    message = addBuffer(message)
    cipher_text = ''
    for (l1, l2) in zip(message[0::2], message[1::2]):
        row1, col1 = indexOf(l1, matrix)
        row2, col2 = indexOf(l2, matrix)
        if row1 == row2:
            cipher_text += matrix[row1][(col1 + inc) % 5] + matrix[row2][(col2 + inc) % 5]
        elif col1 == col2:
            cipher_text += matrix[(row1 + inc) % 5][col1] + matrix[(row2 + inc) % 5][col2]
        else:
            cipher_text += matrix[row1][col2] + matrix[row2][col1]
    return cipher_text
plainText = input("Enter the Plain text: ").upper()
key = input("Enter Key: ").upper().replace('J','I')
cipherText = playfair(key, plainText)
print(f'Encrypted:{cipherText}\nDecrypted:{playfair(key, cipherText, encrypt=False)}')



import math
def find_rank(key):
    rank = 0
    for i in sorted(key):
        key = key.replace(i,str(rank),1)
        rank += 1
    key = [int(i) for i in key]
    return key
def encrypt(pt, key):
    cols = len(key)
    rows = math.ceil(len(pt) / cols)
    key_rank = find_rank(key)
    print(key_rank)
    pt += "".join(["X"] * (rows * cols - len(pt)))
    matrix = [list(pt[i : i + cols]) for i in range(0, len(pt), cols)]
    for i in range(rows):
        print(matrix[i])
    ciphertext = ""
    for ind in range(len(key_rank)):
        col=key_rank.index(ind)
        for i in range(rows):
            ciphertext+=matrix[i][col] 
    return ciphertext
def decrypt(cip, key):
    cols = len(key)
    rows = math.ceil(len(cip) / cols)
    key_rank = find_rank(key)
    count=0
    cip+= "".join(["X"] * (rows * cols - len(cip)))
    cip_mat = [[0 for col in range(cols)] for row in range(rows)]
    for ind in range(len(key_rank)):
        col=key_rank.index(ind)
        for row in range(rows):
            cip_mat[row][col] = cip[count]
            count += 1
    print('--------------')
    for i in range(rows):
        print(cip_mat[i])
    result=""
    for row in cip_mat:
        result+=''.join(row)
    return result.rstrip('X')
pt,key='WEHOPETHATINDIAWINSTHEUPCOMINGWORLDCUP','VIRAT'
ciphertext = encrypt(pt,key)
decrypted=decrypt(ciphertext,key)
print(f"After encryption, Cipher Text : {ciphertext}\nAfter decryption, Plain Text : {decrypted}")
doubleCipher=encrypt(ciphertext,key)
doubleDecrypted=decrypt(decrypt(doubleCipher,key),key)
print(f"After double encryption, Cipher Text : {doubleCipher}\nAfter double decryption, Plain Text : {doubleDecrypted}")









import math

# Function to assign ranks to characters in the key
def find_rank(key):
    rank = 0
    # Iterate over characters in sorted order of the key
    for i in sorted(key):
        # Replace the current character in key with its rank (as string)
        key = key.replace(i, str(rank), 1)
        # Increment the rank for the next character
        rank += 1
    # Convert the modified key string into a list of integers
    key = [int(i) for i in key]
    return key

# Function to encrypt plaintext using columnar transposition cipher
def encrypt(pt, key):
    cols = len(key)
    # Calculate the number of rows needed
    rows = math.ceil(len(pt) / cols)
    # Get the rank order of characters in the key
    key_rank = find_rank(key)
    
    # Pad the plaintext with 'X' to make its length a multiple of the number of columns
    pt += "".join(["X"] * (rows * cols - len(pt)))
    
    # Create a matrix from the padded plaintext
    matrix = [list(pt[i : i + cols]) for i in range(0, len(pt), cols)]
    
    # Initialize the ciphertext
    ciphertext = ""
    
    # Iterate through columns based on the key rank order
    for ind in range(len(key_rank)):
        col = key_rank.index(ind)
        # Collect characters from each column to form the ciphertext
        for i in range(rows):
            ciphertext += matrix[i][col]
    
    return ciphertext

# Function to decrypt ciphertext using columnar transposition cipher
def decrypt(cip, key):
    cols = len(key)
    # Calculate the number of rows needed
    rows = math.ceil(len(cip) / cols)
    # Get the rank order of characters in the key
    key_rank = find_rank(key)
    
    # Pad the ciphertext with 'X' to make its length a multiple of the number of columns
    cip += "".join(["X"] * (rows * cols - len(cip)))
    
    # Initialize the ciphertext matrix
    cip_mat = [[0 for col in range(cols)] for row in range(rows)]
    count = 0
    
    # Reconstruct the ciphertext matrix based on the key rank order
    for ind in range(len(key_rank)):
        col = key_rank.index(ind)
        for row in range(rows):
            cip_mat[row][col] = cip[count]
            count += 1
    
    # Reconstruct the plaintext from the ciphertext matrix
    result = ""
    for row in cip_mat:
        result += ''.join(row)
    
    # Remove any trailing 'X' characters added during padding
    return result.rstrip('X')

# Example usage
pt, key = 'WEAREDISCOVEREDFLEEATONCE', 'ZEBRAS'
ciphertext = encrypt(pt, key)
decrypted = decrypt(ciphertext, key)

print(f"After encryption, Cipher Text : {ciphertext}\nAfter decryption, Plain Text : {decrypted}")

# Additional double encryption and decryption for verification
key2='STRIPE'
doubleCipher = encrypt(ciphertext, key2)
doubleDecrypted = decrypt(decrypt(doubleCipher, key2), key)

print(f"After double encryption, Cipher Text : {doubleCipher}\nAfter double decryption, Plain Text : {doubleDecrypted}")
