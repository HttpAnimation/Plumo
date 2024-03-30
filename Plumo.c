#include <stdlib.h>
#include <stdio.h> // Include stdio.h for printf

int main() {
    int status = system("electron ."); // Adjust the path to electron as needed
    printf("test\n"); // Add a newline character to ensure the message is displayed

    if (status == -1) {
        printf("Error executing electron . command\n");
    } else if (WIFEXITED(status)) {
        int exit_status = WEXITSTATUS(status);
        printf("electron . exited with status: %d\n", exit_status);
    } else {
        printf("electron . did not exit normally\n");
    }

    return 0;
}