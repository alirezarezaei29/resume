Module VBModule
    Sub Main()
    Dim l As Integer
    Dim testChar As Char
    Dim name As String
    Console.WriteLine("Enter String ...")
    name = Console.ReadLine()
    l = len(name)
    For i As Integer = 1 To l
        testChar = GetChar(name, i)
       
        if asc(testChar) >= asc ("a") & asc(testChar) <= asc("z") then
        Console.WriteLine("hello")
        End If
        Next
        

        Console.ReadLine()
    End Sub
End Module
