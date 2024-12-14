$i = 1  # Mulai dari nomor 1
Get-ChildItem -Filter *.jpeg | ForEach-Object {
    $newName = "about" + $i + ".jpeg"
    Rename-Item $_.FullName -NewName $newName
    $i++  # Menambahkan 1 untuk setiap file
}

# for mp4 file : 
$i = 1  # Mulai dari nomor 1

# Ambil semua file dengan ekstensi .jpeg dan .mp4
Get-ChildItem -Filter "*.jpeg, *.mp4" | ForEach-Object {
    # Tentukan ekstensi file
    $extension = $_.Extension.ToLower()

    # Tentukan nama baru dengan format yang sama, tergantung pada ekstensi
    $newName = "gallery" + $i + $extension

    # Ganti nama file
    Rename-Item $_.FullName -NewName $newName
    $i++  # Menambahkan 1 untuk setiap file
}