#include <stdlib.h>
#include <stdio.h> // Include stdio.h for printf

int main() {
    // Run if the SilverOS app does not work
    int status = system("npm start"); // Adjust the path to npm as needed
    printf("test\n"); // Add a newline character to ensure the message is displayed

    if (status == -1) {
        printf("Error executing npm start command\n");
    } else if (WIFEXITED(status)) {
        int exit_status = WEXITSTATUS(status);
        printf("npm start exited with status: %d\n", exit_status);
    } else {
        printf("npm start did not exit normally\n");
    }

    return 0;
}