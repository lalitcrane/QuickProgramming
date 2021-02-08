

#### Do not include API Security Keys in Github

     Put Security Keys in a file. 
     Read the file in Code.
     Add those files in .gitignore list.

#### Python Code - Don't upload API Security Keys to Github

        $ nano ~/.bash_profile.
        $ export SECRET_ACCESS_KEY=yourkeyhere
        
        ----- In your python script-------
        
        import os
        mykey = os.getenv("SECRET_ACCESS_KEY")
        
        
