# Red Carpet Plumbing - Image Organization Migration (v2 plan execution)
# Source plan: docs/site-os/qa/image-organization-audit.md
# Constraints: do not delete files; preserve extensions; nothing into public/images; no commits.

$ErrorActionPreference = 'Stop'
$root = 'C:\Users\Sederick Harris\Desktop\client-sites\red-carpet-plumbing-site'
$imagesRoot = Join-Path $root 'Images'

# --- Files planned for duplicates-review/ per v2 audit (Section: Files Flagged For duplicates-review)
$duplicatesPlan = @(
    'services\backflow-prevention-services.webp',
    'services\drain-cleaning-clog-removal.webp',
    'services\Emergency Plumbing\Water Heater Leak Repair  Emergency Plumbing Services  Red Carpet Plumbing Las Vegas.webp',
    'services\garbage-disposal-services.webp',
    'services\natural-gas-line-services.webp',
    'services\Re-Piping\shharris0117_Editorial-style_photo_of_a_licensed_plumber_in_nav_cc67b215-6cbb-4eb8-8a74-81d82dcac4b3.webp',
    'services\Sink Repair Services\Modern Bathroom and Kitchen Faucet Installation  Red Carpet Plumbing Las Vegas, NV.webp',
    'services\slab-leak-detection-repair.webp',
    'services\Toilet Repair\shharris0117_Editorial-style_image_of_a_professional_plumber_in_931a9fe1-dd82-4fe1-be43-0244f66d108e.webp',
    'services\toilet-repair-installation.webp',
    'services\Video Camera Inspection\shharris0117_Editorial-style_image_of_a_professional_plumber_in_2c7976fd-8dce-481e-9415-ace9884cd9f0.webp',
    'services\Video Camera Inspection\shharris0117_Editorial-style_image_of_a_professional_plumber_in_35ee85c6-8a18-4137-987c-e05bde7a5419.webp',
    'services\video-camera-plumbing-inspections.webp',
    'services\Water Leak and Clog\shharris0117_High-resolution_editorial-style_image_of_a_profess_ec57a48a-0498-4971-8f66-e1732b0af135 (1).jpg',
    'services\Water Pipe\shharris0117_Editorial-style_image_of_a_professional_plumber_in_0b7a229e-244b-4bd3-b7ad-8ac5b329cbe6.webp',
    'services\water-heater-repair-replacement-installation.webp',
    'services\water-leak-clog-troubleshooting.webp',
    'services\water-meter-pressure-regulator-services.webp',
    'services\water-pipe-repair-replacement-installation.webp'
)

# --- Folder renames (all files in source folder go to target, except duplicates-review overrides)
$folderMap = [ordered]@{
    'logo'                                = 'brand\logo'
    'company vehicle'                     = 'company\vehicles'
    'emergency plumbing'                  = 'services\emergency-plumbing'
    'services\Backflow Prevention Services' = 'services\backflow-prevention'
    'services\Drain Cleaning Services'    = 'services\drain-cleaning'
    'services\Emergency Plumbing'         = 'services\emergency-plumbing'
    'services\Garbage Disposal'           = 'services\garbage-disposal-repair-installation'
    'services\Natural Gas'                = 'services\gas-line-plumbing'
    'services\Plumbing Fixtures'          = 'services\plumbing-fixture-repair-replacement-installation'
    'services\Re-Piping'                  = 'services\re-piping'
    'services\Sink Repair Services'       = 'services\faucet-sink-repair-installation'
    'services\Slab Leak'                  = 'services\slab-leak-detection-repair'
    'services\Toilet Repair'              = 'services\toilet-repair-installation'
    'services\Trenchless Piping'          = 'services\trenchless-piping'
    'services\Video Camera Inspection'    = 'services\video-camera-plumbing-inspections'
    'services\Water Heater Services'      = 'services\water-heater-repair-installation'
    'services\Water Leak and Clog'        = 'services\leak-detection-repair'
    'services\Water Meter'                = 'services\water-meter-pressure-regulator-services'
    'services\Water Pipe'                 = 'services\water-pipe-repair-replacement'
}

# --- Per-file overrides
$fileOverrides = [ordered]@{
    'Red Carpet Plumbing Discount.jpg'                                                                                                            = 'brand\social'
    'services\24-7-emergency-plumbing.webp'                                                                                                       = 'services\emergency-plumbing'
    'services\faucet-sink-repair-replacement-installation.webp'                                                                                   = 'services\faucet-sink-repair-installation'
    'services\re-piping-services.webp'                                                                                                            = 'services\re-piping'
    'hero\las-vegas-night-skyline-hero.webp'                                                                                                      = 'hero\locations'
    'locations\Henderson,_NV_-_District1.jpg'                                                                                                     = 'locations\henderson'
    'locations\LasVegasBeautifulMontage.jpg'                                                                                                      = 'locations\las-vegas'
    'locations\shharris0117_Editorial-style_aerial_photo_capturing_the_area_ne_2ffdbbae-091d-4892-91f4-fdd1d1674b1a (1).webp'                     = 'locations\las-vegas'
    'locations\shharris0117_Editorial-style_aerial_photo_capturing_the_area_ne_fbfbeede-37f6-44da-99f0-beb008369070.webp'                         = 'locations\las-vegas'
    'locations\shharris0117_Editorial-style_aerial_photo_capturing_the_vast_an_b38a25f8-d70f-430f-9d6b-9e7a617d947a.webp'                         = 'locations\las-vegas'
    'locations\shharris0117_Editorial-style_aerial_shot_of_the_Las_Vegas_NV_sk_4ca974be-9288-4d5c-84c6-2531b099d9bc.webp'                         = 'locations\las-vegas'
    'locations\shharris0117_Editorial-style_image_featuring_the_iconic_Welcome_e8c14efd-06d0-47a2-ae0a-becec30af95a.webp'                         = 'locations\las-vegas'
    "locations\View_of_Las_Vegas'_strip_from_the_helicopter.jpg"                                                                                  = 'locations\las-vegas'
    'locations\Las_Vegas_Spring_Valley_1.jpg'                                                                                                     = 'locations\spring-valley'
    'locations\SummerlinEntrance.jpg'                                                                                                             = 'locations\summerlin'
    'locations\The_Ridges_in_Summerlin.jpg'                                                                                                       = 'locations\summerlin'
}

# --- Target folders to pre-create
$targetFolders = @(
    'blog', 'brand\logo', 'brand\social', 'company\vehicles', 'duplicates-review',
    'hero\homepage', 'hero\locations',
    'locations\henderson', 'locations\las-vegas', 'locations\spring-valley', 'locations\summerlin',
    'services\backflow-prevention', 'services\drain-cleaning', 'services\emergency-plumbing',
    'services\faucet-sink-repair-installation', 'services\garbage-disposal-repair-installation',
    'services\gas-line-plumbing', 'services\leak-detection-repair',
    'services\plumbing-fixture-repair-replacement-installation', 'services\re-piping',
    'services\slab-leak-detection-repair', 'services\toilet-repair-installation',
    'services\trenchless-piping', 'services\video-camera-plumbing-inspections',
    'services\water-heater-repair-installation', 'services\water-meter-pressure-regulator-services',
    'services\water-pipe-repair-replacement'
)
foreach ($tf in $targetFolders) {
    $tp = Join-Path $imagesRoot $tf
    if (-not (Test-Path $tp)) { New-Item -ItemType Directory -Path $tp -Force | Out-Null }
}

function Get-Sha256 { param([string]$Path) (Get-FileHash -Path $Path -Algorithm SHA256).Hash }

function Get-UniqueName {
    param([string]$TargetDir, [string]$FileName)
    $base = [System.IO.Path]::GetFileNameWithoutExtension($FileName)
    $ext  = [System.IO.Path]::GetExtension($FileName)
    $i = 2
    while ($true) {
        $candidate = "$base-copy-$i$ext"
        if (-not (Test-Path (Join-Path $TargetDir $candidate))) { return $candidate }
        $i++
    }
}

$moves = New-Object System.Collections.ArrayList
$collisions = New-Object System.Collections.ArrayList
$skipped = New-Object System.Collections.ArrayList

# Snapshot file list BEFORE any moves
$allFiles = Get-ChildItem -Path $imagesRoot -File -Recurse | Sort-Object FullName

foreach ($f in $allFiles) {
    $relPath = $f.FullName.Substring($imagesRoot.Length + 1)
    $target = $null
    $route = 'organized'

    if ($duplicatesPlan -contains $relPath) {
        $target = 'duplicates-review'
        $route = 'duplicates-review (planned)'
    }
    elseif ($fileOverrides.Contains($relPath)) {
        $target = $fileOverrides[$relPath]
    }
    else {
        $parent = Split-Path $relPath -Parent
        if ($parent -and $folderMap.Contains($parent)) {
            $target = $folderMap[$parent]
        }
        elseif ($parent -eq 'hero') {
            $target = 'hero\homepage'
        }
        elseif ($parent -eq 'blog') {
            # already in target
            $target = 'blog'
        }
    }

    if ($null -eq $target) {
        [void]$skipped.Add([PSCustomObject]@{ Source = $relPath; Reason = 'no rule matched' })
        continue
    }

    $targetDir = Join-Path $imagesRoot $target
    $targetPath = Join-Path $targetDir $f.Name

    # No-op if already at target
    if ($f.FullName -eq $targetPath) { continue }

    $finalName = $f.Name
    $finalTarget = $target
    $collisionNote = $null

    if (Test-Path $targetPath) {
        $srcHash = Get-Sha256 $f.FullName
        $tgtHash = Get-Sha256 $targetPath
        if ($srcHash -eq $tgtHash) {
            # Same name + same hash -> reroute to duplicates-review
            $finalTarget = 'duplicates-review'
            $finalName   = $f.Name
            $dupDir      = Join-Path $imagesRoot 'duplicates-review'
            $dupPath     = Join-Path $dupDir $finalName
            if (Test-Path $dupPath) {
                $finalName = Get-UniqueName -TargetDir $dupDir -FileName $f.Name
            }
            $collisionNote = "Same filename + same SHA256 at target '$target'. Rerouted to duplicates-review/ as '$finalName'."
            $route = 'duplicates-review (collision)'
        } else {
            # Same name + different hash -> rename with -copy-N
            $finalName = Get-UniqueName -TargetDir $targetDir -FileName $f.Name
            $collisionNote = "Same filename + different SHA256 at target '$target'. Renamed to '$finalName'."
        }
        [void]$collisions.Add([PSCustomObject]@{
            Source        = $relPath
            OriginalName  = $f.Name
            FinalTarget   = $finalTarget
            FinalName     = $finalName
            Note          = $collisionNote
        })
    }

    $finalTargetDir = Join-Path $imagesRoot $finalTarget
    if (-not (Test-Path $finalTargetDir)) { New-Item -ItemType Directory -Path $finalTargetDir -Force | Out-Null }
    $finalPath = Join-Path $finalTargetDir $finalName

    Move-Item -Path $f.FullName -Destination $finalPath
    [void]$moves.Add([PSCustomObject]@{
        Source = $relPath
        Target = (Join-Path $finalTarget $finalName)
        Route  = $route
    })
}

# Remove empty source folders (no files were deleted)
$srcFoldersToCheck = @(
    'logo', 'company vehicle', 'emergency plumbing',
    'services\Backflow Prevention Services', 'services\Drain Cleaning Services',
    'services\Emergency Plumbing', 'services\Garbage Disposal',
    'services\Natural Gas', 'services\Plumbing Fixtures', 'services\Re-Piping',
    'services\Sink Repair Services', 'services\Slab Leak', 'services\Toilet Repair',
    'services\Trenchless Piping', 'services\Video Camera Inspection',
    'services\Water Heater Services', 'services\Water Leak and Clog',
    'services\Water Meter', 'services\Water Pipe'
)
$removedFolders = @()
foreach ($sf in $srcFoldersToCheck) {
    $sp = Join-Path $imagesRoot $sf
    if (Test-Path $sp) {
        $remaining = Get-ChildItem $sp -File -Recurse -ErrorAction SilentlyContinue
        if (-not $remaining -or $remaining.Count -eq 0) {
            Remove-Item -Path $sp -Recurse -Force
            $removedFolders += $sf
        }
    }
}

# Persist CSVs for the report
$movesCsv = Join-Path $root 'docs\site-os\qa\image-moves.csv'
$collisionsCsv = Join-Path $root 'docs\site-os\qa\image-collisions.csv'
$moves | Export-Csv -Path $movesCsv -NoTypeInformation -Encoding UTF8
if ($collisions.Count -gt 0) {
    $collisions | Export-Csv -Path $collisionsCsv -NoTypeInformation -Encoding UTF8
}

# Final post-state inventory
$postFiles = Get-ChildItem -Path $imagesRoot -File -Recurse
$postByFolder = $postFiles | Group-Object { $_.DirectoryName.Substring($imagesRoot.Length + 1) } | Sort-Object Name

Write-Output "=== EXECUTION SUMMARY ==="
Write-Output ("Files processed: {0}" -f $allFiles.Count)
Write-Output ("Files moved: {0}" -f $moves.Count)
Write-Output ("Files moved to duplicates-review (planned): {0}" -f (($moves | Where-Object Route -eq 'duplicates-review (planned)').Count))
Write-Output ("Files moved to duplicates-review (collision): {0}" -f (($moves | Where-Object Route -eq 'duplicates-review (collision)').Count))
Write-Output ("Filename collisions handled: {0}" -f $collisions.Count)
Write-Output ("Empty source folders removed: {0}" -f $removedFolders.Count)
Write-Output ("Files skipped (no rule): {0}" -f $skipped.Count)
Write-Output ("Post-move file count: {0}" -f $postFiles.Count)
Write-Output ""
Write-Output "=== POST-MOVE FOLDER COUNTS ==="
$postByFolder | ForEach-Object { Write-Output ("{0,5}  {1}" -f $_.Count, $_.Name) }
Write-Output ""
Write-Output "=== COLLISIONS ==="
if ($collisions.Count -eq 0) { Write-Output "(none)" } else { $collisions | Format-Table -AutoSize | Out-String | Write-Output }
Write-Output ""
Write-Output "=== SKIPPED ==="
if ($skipped.Count -eq 0) { Write-Output "(none)" } else { $skipped | Format-Table -AutoSize | Out-String | Write-Output }
Write-Output ""
Write-Output "=== REMOVED EMPTY FOLDERS ==="
if ($removedFolders.Count -eq 0) { Write-Output "(none)" } else { $removedFolders | ForEach-Object { Write-Output "  - $_" } }
