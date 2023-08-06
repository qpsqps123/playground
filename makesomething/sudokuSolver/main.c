#include <stdio.h>
#include <unistd.h> // <io.h> = <unistd.h> in VSC
//int argc, char*argv[]
int main(int argc, char*argv[])
{
    int i;
    char j[15] = "Hello World\n";
    write(1, j, 12);
    printf("argc = %d개\n", argc);
    for (i = 0; i < argc; i++)
    {
        printf("argv[%d] = %s 입니다.\n",i,argv[i]);
    }
    
	
    return 0;
}
