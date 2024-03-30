export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat(
        'fr-FR', {
            style: 'currency',
            currency: 'XOF' // Change currency to 'XOF' for Franc CFA
        }).format(amount);
};
