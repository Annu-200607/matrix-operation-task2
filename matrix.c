#include <stdio.h>

int main() {
    int r, c, i, j, k;
    int A[10][10], B[10][10], C[10][10];

    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);

    printf("Enter Matrix A:\n");
    for(i=0;i<r;i++)
        for(j=0;j<c;j++)
            scanf("%d",&A[i][j]);

    printf("Enter Matrix B:\n");
    for(i=0;i<r;i++)
        for(j=0;j<c;j++)
            scanf("%d",&B[i][j]);

    printf("Addition Result:\n");
    for(i=0;i<r;i++) {
        for(j=0;j<c;j++) {
            C[i][j] = A[i][j] + B[i][j];
            printf("%d ", C[i][j]);
        }
        printf("\n");
    }

    printf("Transpose of A:\n");
    for(i=0;i<c;i++) {
        for(j=0;j<r;j++)
            printf("%d ", A[j][i]);
        printf("\n");
    }

    return 0;
}
