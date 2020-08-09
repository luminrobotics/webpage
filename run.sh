# start a simple web server to test the real thing
python3 -m http.server &
trap "echo killing server && pkill -f http.server" EXIT

# start bable monitoring
cd companies
npx babel --watch src --out-dir . --presets react-app/prod
