# caesar cipher : alphabet lena hai 
# CT=PT[i]+3 % 26

def caesar_encrypt(message,key):
    message=message.upper()
    result=""
    alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for letter in message:
        if letter in alphabets:
            letter_index=(alphabets.find(letter)+key)%len(alphabets)
            result+=alphabets[letter_index]
        else:
            result+=letter
    return result

def caesar_decrypt(message,key):
    message=message.upper()
    result=""
    alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for letter in message:
        if letter in alphabets:
            letter_index=(alphabets.find(letter)-key)%len(alphabets)
            result+=alphabets[letter_index]
        else:
            result+=letter
    return result
    
ans=caesar_encrypt("hello",3)
print(ans)
ans2=caesar_decrypt(ans,3)
print(ans2)

# vigenere cipher:
# padding add karna hai if length not equal
# directly encypt karna hao , ct= chr((ord(pt[i])+k[i])%26+65)
# CT=PT[i]+K[i]%26

pt=input("Enter plain text: ").upper()
key=input("enter key: ").upper()

padd_key=key
if(len(pt)==len(key)):
    padd_key=key
else:
    for i in range(len(pt)-len(key)):
        padd_key+=key[i%len(key)]
ct,dect="",""
for i in range(len(pt)):
    ct+=chr((ord(pt[i])+ord(padd_key[i]))%26+65)
for i in range(len(pt)):
    dect+=chr((ord(ct[i])-ord(padd_key[i]))%26+65)
print(ct,dect)


# vernam cipher
# no additional padding required
# xor karna hai , pehle -65 yaad rakhna ,fir +65

pt=input("Enter plain text: ").upper()
key=input("Enter key ").upper()
def encrypt(pt,key):
  ct=""
  if(len(pt)==len(key)):
    for i in range(len(pt)):
            result=(ord(pt[i])-65)^(ord(key[i])-65)
            if(result>25):
                result=result%26
            ct+=chr(65+result)      
    return ct
  else:
        return "make the length equal"
enc_msg=encrypt(pt,key)
print(enc_msg)
dec_msg=encrypt(enc_msg,key)
print(dec_msg)
 
    
# rsa
def rsa(p,q,e,pt):
    n=p*q
    phi=(p-1)*(q-1)
    d=1
    while True:
        if(d*e) % phi==1:
            break
        d+=1
    print(f"Public key ({e},{n})")
    print(f"Private key ({d},{n})")
    ct=pow(pt,e,n)
    print("Cipher text ",ct)
    pt=pow(ct,d,n) 
    print("Decrypted text ",pt)
rsa(7,11,13,17)

# rsa digital signature
public_key=(13,77)
private_key=(37,77)
import hashlib
def sign(message,private_key):
    d,n=private_key
    md1=int(hashlib.md5(message.encode()).hexdigest(),16)%n
    signature=pow(md1,d,n)
    print("MD1 ",md1)
    print("Signature sent ",signature)
    return signature,md1

def verify_sign(message,signature,public_key):
    e,n=public_key
    md2=int(hashlib.md5(message.encode()).hexdigest(),16)%n
    recovered_hash=pow(signature,e,n)
    print("MD2 ",md2)
    print("Recovered Hash ",recovered_hash)
    return md2,recovered_hash

message="Hello, World!"
signature,md1=sign(message,private_key)
recovered_hash,md2=verify_sign(message,signature,public_key)

print("-----------------------------------------")
print("final")
print("Singature ",signature)
print("recieved value ",recovered_hash)
if(md1==md2):
    print("message transmitted successfully")
else:
    print("there is an issue")

# diffie hellman
p=7
alpha=int(input(f"enter alpha (primitive root of {p})"))
XA=int(input("Enter user 1's private key "))
YA=pow(alpha,XA,p)
print("User 1's public key (YA) sent to user 2 is ",YA)
XB=int(input("Enter user 2' private key "))
YB=pow(alpha,XB,p)
print("User 2's public key (YB) sent to user 1 is ",YB)
print("Now finding the common shared secret key")
AK=pow(YB,XA,p)
BK=pow(YA,XB,p)
print("A's secret key ",AK)
print("B's secret key ",BK)

#md5
def left_shift(x,n):
    return ((x<<n) | (x-32>>n))&0xFFFFFFFF

def md5(message):
    #step1 and step2: add padding and append length
    padding_length=0

    if(len(message)+64)%512:
        message+="1"
        padding_length=512-(len(message)+64)%512
    message+="0"*padding_length
    print("Padding length ",padding_length+1)
    
    # step 3 divide the text into 512 bit blocks
    message_worded=[int(message[i:i+32],2) for i in range(0,len(message),32)]
    original_length=len(message)-64
    message_worded.append(original_length)
    
    # step 4 initializing chaining variables
    a,b,c,d=[0x01234567,0x89ABCDEF,0xFEDCBA98,0x7654321]
    print(f"Chainin variables are {a} {b} {c} {d}")
    
    def F(x,y,z):
        return (x&y)| (~x &z)
    # step 5 process block
    for i in range(0,len(message_worded),16):
        f=F(b,c,d)
        g=(i>>2)&0x03
        for j in range(0,16):
            if(i+j<len(message_worded)):
                temp=(a+f+g+message_worded[i+j])&0xFFFFFFFF
                a=d
                d=c
                c=b
                b+=left_shift(temp,7)
    digest=format(a,"08x")
    digest+=format(b,"08x")
    digest+=format(c,"08x")
    digest+=format(d,"08x")
    
    return digest
        
import random
random_message="".join([random.choice(["0","1"]) for _ in range(1000)])
print("random message of 1000 bits ",random_message)
after_first_round=md5(random_message)
print("after first round ",after_first_round)