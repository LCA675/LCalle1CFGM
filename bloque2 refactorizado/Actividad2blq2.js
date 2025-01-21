
        function num() {
        let n=8
        for (n>=0; n<=500; n=n+8) {
            document.write(n)
            if (n<496) {
                document.write("-")
            }else {
                document.write("")
            }
        }
        return "<br> Los multiplos de 8 hasta 500 son:"
        }
        r=num();
        document.write(r);
